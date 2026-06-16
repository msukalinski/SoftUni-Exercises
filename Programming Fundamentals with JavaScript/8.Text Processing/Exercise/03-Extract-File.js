function fileExtract (text){
    let file = text.split('\\').pop();
    let extensionIdx = file.lastIndexOf('.');
    let extension = file.substring(extensionIdx + 1);
    console.log(`File name: ${file.substring(0, extensionIdx)}`);
    console.log(`File extension: ${extension}`);
}
fileExtract('C:\\Internal\\training-internal\\Template.pptx');
fileExtract('C:\\Projects\\Data-Structures\\LinkedList.cs')
fileExtract('C:\\Projects\\Data-Structures\\template.bak.pptx')