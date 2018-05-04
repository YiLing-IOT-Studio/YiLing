import Tab from './Tab'
import Home from './Home'
import Skill from './Skill'
import Code from './Code'
import ImgMap from './ImgMap'
import LoginPanel from './LoginPanel'

export default class Page {
    constructor() {
        this.tab = new Tab();
        this.home = new Home();
        this.skill = new Skill();
        this.code = new Code();
        this.imgMap = new ImgMap();
        this.loginPanel = new LoginPanel();
    }

    init() {
        const self = this;
        $(document).ready(function() {
            self.tab.init();
            self.home.init();
            self.skill.init();
            self.code.init();
            self.imgMap.init();
            self.loginPanel.init();
        });
    }
}