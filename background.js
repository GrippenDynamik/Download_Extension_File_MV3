function onChanged(downloadDelta) {
	console.log("MV3", "b) onChanged", "downloadDelta", downloadDelta);
}

async function onCreated(downloadItem) {
	console.log("MV3", "a) onCreated", "downloadItem", downloadItem);
}

function onClicked(tab, onClickData) {
	chrome.downloads.download({
		conflictAction: "overwrite",
		filename: "Test.txt",
		saveAs: false,
		url: chrome.runtime.getURL("text/Test.txt"),
	});
}

chrome.downloads.onChanged.addListener(onChanged);
chrome.downloads.onCreated.addListener(onCreated);
chrome.action.onClicked.addListener(onClicked);
