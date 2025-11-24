function downloadFile(filename, callback) {
    setTimeout(() => {
        console.log(`Downloading ${filename}...`);
        callback(); 
    }, 2000); 
}
downloadFile("example.txt", () => {
    console.log("Download complete!");
});