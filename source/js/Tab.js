export default class Tab {
    constructor() {
        this.$tab = $('.fp-tab');
        this.$panel = $('.fp-panel');
    }

    init() {
        this.tab();
    }

    tab() {
        this.$tab.on('click', e => {
            let $target = $(e.target);
            let index = $target.index('.list-group-item');
            this.$tab.children().toArray().forEach(item => {
                let $item = $(item);
                if ($item.hasClass('active')) {
                    $item.removeClass('active');
                }
            });
            $target.addClass('active');

            this.$panel.toArray().forEach((item, idx) => {
                item.style.display = 'none';
                if (index === idx) {
                    item.style.display = 'block';
                }
            });
        })
    }
}