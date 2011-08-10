var loader = {
    init: function() {
        document.addEventListener("contextmenu", function(event) {
            var userData = {"imgUrl": event.target.src, "nodeName": event.target.nodeName};
            safari.self.tab.setContextMenuEventUserInfo(event, userData);
        }, false);

    }
};

loader.init();