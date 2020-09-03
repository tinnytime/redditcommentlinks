links = document.querySelectorAll('.commentarea .usertext-body a')

var listWrapper = document.createElement('div')
listWrapper.className = 'md '
var list = document.createElement('ol')
listWrapper.appendChild(list)
var unique = []

for (let _link of links) {
    // Dedupe
    if (unique.indexOf(_link.href) != -1) continue
    unique.push(_link.href)

    // Don't show user links
    let u = /https?:\/\/.*\.reddit\.com\/(u|message)\//
    if (u.exec(_link.href)) continue

    let item = document.createElement('li')
    let link = _link.cloneNode(true)
    link.target = '_blank'
    item.appendChild(link)
    list.appendChild(item)
}

document.getElementById('siteTable').appendChild(listWrapper)


