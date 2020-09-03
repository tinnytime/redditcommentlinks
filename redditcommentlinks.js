// Stickied posts are usually auto moderator posts
// so ignore the links in them
links = document.querySelectorAll('.commentarea .comment:not(.stickied) .usertext-body a')

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

    // Don't show subreddit or user links
    let u = /^https?:\/\/.*\.reddit\.com\/r|u\/[a-zA-Z0-9_]*$/
    if (u.exec(href)) continue

    let item = document.createElement('li')
    let link = _link.cloneNode(true)
    link.target = '_blank'

    // Get the comment ID so we can link to the comment
    let id = ''
    let cur = _link.parentNode
    while (!id) {
        let sib = cur.previousSibling
        if (sib && sib.tagName ==='INPUT' && sib.name === 'thing_id')
            id = 'thing_' + sib.value
        else
            cur = cur.parentNode
    }

    if (link.textContent.toLowerCase() !== href)
        link.textContent = href + ' - ' + link.textContent

    let a = document.createElement('a')
    a.href = '#' + id
    a.textContent = '^ '
    item.appendChild(a)
    item.appendChild(link)
    list.appendChild(item)
}

document.getElementById('siteTable').appendChild(listWrapper)


