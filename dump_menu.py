import zipfile
import xml.etree.ElementTree as ET
import json

def read_docx(file_path):
    try:
        with zipfile.ZipFile(file_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            paragraphs = []
            for p in tree.findall('.//w:p', namespaces=ns):
                texts = [node.text for node in p.findall('.//w:t', namespaces=ns) if node.text]
                if texts:
                    paragraphs.append(''.join(texts).strip())
            return '\n'.join(paragraphs)
    except Exception as e:
        return str(e)

text = read_docx(r"c:\All Live Website\puri sand\HOTEL PURI SANDS MENU.docx")
with open("menu_utf8.txt", "w", encoding="utf-8") as f:
    f.write(text)
