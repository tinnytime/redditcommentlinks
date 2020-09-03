links = document.querySelectorAll('.commentarea .usertext-body a')

var listWrapper = document.createElement('div')
listWrapper.className = 'md '
var list = document.createElement('ol')
listWrapper.appendChild(list)
var unique = []

for (let _link of links) {
    let href = _link.href.toLowerCase()

    // Dedupe
    if (unique.indexOf(href) != -1) continue
    unique.push(href)

    // Don't show user links
    let u = /https?:\/\/.*\.reddit\.com\/(u|message)\//
    if (u.exec(href)) continue

    let item = document.createElement('li')
    let link = _link.cloneNode(true)
    link.target = '_blank'

    if (link.textContent.toLowerCase() !== href)
        link.textContent = href + ' - ' + link.textContent

    item.appendChild(link)
    list.appendChild(item)
}

document.getElementById('siteTable').appendChild(listWrapper)


