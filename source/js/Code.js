// function Code() {
//     // 加入我们
//     let $langTab = $('.langTab');
//     let $langCard = $langTab.next('.card');
//     let lang = {
//         $title: $langCard.find('.card-title'),
//         $code: $langCard.find('code'),
//         $btn: $langCard.find('.btn')
//     };
//     $.get('http://localhost:3000/api/code').done(data => {
//         data = JSON.parse(data);
//         lang.$code.text(data[0].code);
//         hljs.highlightBlock(lang.$code[0]);
//     }).then(data => {
//         data = JSON.parse(data);
//         $langTab.on('click', function(e) {
//             let $target = $(e.target);
//             let index = $target.index('.nav-link');
//             $langTab.children().toArray().forEach(function(item) {
//                 let $span = $(item).find('.nav-link');
//                 if ($span.hasClass('active')) {
//                     $span.removeClass('active');
//                 }
//             });
//             $target.addClass('active');
//             lang.$title.text(data[index].title);
//             lang.$code.text(data[index].code);
//             lang.$code[0].className = '';
//             lang.$code.addClass(data[index].className);
//             lang.$code.each(function(i, block) {
//                 hljs.highlightBlock(block);
//             });
//             lang.$btn.text(data[index]['btn-txt']);
//         });
//     });
// }

// export { Code }

export default class Code {
    constructor() {
        this.$tab = $('.fp-lang-tab');
        this.$info = $('.fp-lang-info');
        this.$code = $('.card code');
        this.$btn = $('.fp-lang-btn');
    }

    init() {
        this.getData();
    }

    getData() {
        $.get('http://localhost:3000/api/code')
            .done(data => {
                data = JSON.parse(data);
                this.$code.text(data[0].code);
                hljs.highlightBlock(this.$code[0]);
            })
            .then(data => {
                data = JSON.parse(data);
                this.$tab.on('click', e => {
                    let $target = $(e.target);
                    let index = $target.index('.nav-link');
                    this.$tab.children().toArray().forEach(function(item) {
                        let $span = $(item).find('.nav-link');
                        if ($span.hasClass('active')) {
                            $span.removeClass('active');
                        }
                    });
                    $target.addClass('active');
                    this.$info.text(data[index].title);
                    this.$code.text(data[index].code);
                    this.$code.removeClass();
                    this.$code.addClass(data[index].className);
                    this.$code.each(function(i, block) {
                        hljs.highlightBlock(block);
                    });
                    this.$btn.text(data[index]['btn-txt']);
                });
            })
    }
}