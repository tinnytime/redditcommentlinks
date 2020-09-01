links = document.querySelectorAll('.commentarea .usertext-body a')


var listWrapper = document.createElement('div')
listWrapper.className = 'md '
var list = document.createElement('ol')
listWrapper.appendChild(list)

for (let _link of links) {
    // Don't show user links
    if (_link.innerText.indexOf('u/') === 0) continue
    // Don't show subreddit links
    if (_link.innerText.indexOf('r/') === 0) continue
    var item = document.createElement('li')
    var link = _link.cloneNode(true)
    link.target = '_blank'
    item.appendChild(link)
    list.appendChild(item)
}

document.getElementById('siteTable').appendChild(listWrapper)


