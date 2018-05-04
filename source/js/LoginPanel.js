export default class LoginPanel {
    constructor() {
        this.$form = $('#fp-form');
        this.$profile = $('#fp-profile');
        this.$username = $('#username');
        this.$password = $('#password');
        this.$rememberMe = $('#rememberMe');
        this.$submit = $('#submit');

        this.userInfo = {};
    }

    init() {
        this.$profile.hide();
        this.login();
    }

    login() {
        this.$submit.on('click', e => {
            e.preventDefault();
            let username = this.$username.val();
            let password = this.$password.val();
            let isValid = this.isValid(username, password);
            if (isValid) {
                this.userInfo.username = username;
                this.userInfo.password = password;
                $.post({
                        url: 'http://localhost:3000/api/user',
                        data: JSON.stringify(this.userInfo),
                        dataType: 'json',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .done(data => {
                        data = JSON.parse(data);
                        if (data.isMember === true) {
                            // TODO: login successed tip
                            alert(`${data.username} 登录成功`);
                            this.$form.hide();
                            this.$profile.show();
                        }
                    })
                    .fail(err => {
                        // TODO: login failed tip
                        alert('登录失败');
                    });
            }
        });
    }

    isValid(username, password) {
        let nameIsValid = this.isValidName(username);
        let pswdIsValid = this.isValidPswd(password);

        if (nameIsValid) {
            if (pswdIsValid) {
                return true;
            } else {
                // do something
                return false;
            }
        } else {
            // do something
            return false;
        }
    }
    isValidName(username) {
        return true;
    }
    isValidPswd(password) {
        return true;
    }
}