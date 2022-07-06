const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')
const tabActive = $('.tab-item.active')

const line = $('.line')

console.log(tabActive)

requestIdleCallback(function() {
        line.style.left = tabActive.offsetLeft + 'px'
        line.style.width = tabActive.offsetWidth + 'px'
})


tabs.forEach(function(tab, index) {
        tab.onclick = function() {
                const pane = panes[index]
                $('.tab-item.active').classList.remove('active')
                $('.tab-pane.active').classList.remove('active')

                line.style.left = this.offsetLeft + 'px'
                line.style.width = this.offsetWidth + 'px'

                tab.classList.add('active')
                pane.classList.add('active')
        }
})