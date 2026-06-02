const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function extractDocx(docxPath) {
    const filename = path.basename(docxPath, '.docx');
    const unzipDir = path.join(__dirname, 'unzipped_' + filename);
    const txtFile = path.join(__dirname, 'File de', filename + '.txt');
    
    try {
        if (fs.existsSync(unzipDir)) {
            fs.rmSync(unzipDir, { recursive: true, force: true });
        }
        execSync(`powershell -Command "Expand-Archive -Path '${docxPath}' -DestinationPath '${unzipDir}' -Force"`);
        
        const documentXmlPath = path.join(unzipDir, 'word', 'document.xml');
        if (fs.existsSync(documentXmlPath)) {
            const xml = fs.readFileSync(documentXmlPath, 'utf8');
            const paragraphs = xml.split(/<w:p(?:\s+[^>]*>|>)/);
            let fullText = paragraphs.map(p => {
                const matches = p.match(/<w:t(?:[^>]*)>(.*?)<\/w:t>/g);
                if (!matches) return '';
                return matches.map(m => m.replace(/<[^>]+>/g, '')).join('');
            }).join('\n');
            fullText = fullText.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
            fs.writeFileSync(txtFile, fullText.trim(), 'utf8');
            console.log(`Extracted ${filename} to txt.`);
        }
    } catch (e) {
        console.error(`Failed to extract ${docxPath}:`, e.message);
    }
}

const files = [
    'File de/Bai_doc_so_08_form_attempt_review_co_anh.docx',
    'File de/Bai_doc_so_09_form_attempt_review_co_anh.docx',
    'File de/Bai_doc_so_10_form_attempt_review_co_anh.docx'
];

files.forEach(f => extractDocx(path.join(__dirname, f)));
