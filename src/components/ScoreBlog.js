import React from 'react';

class ScoreBlog extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonState: true
        };
    }

    blog(C, r, i, c, a, p, I) {
        c = document.createElement('script');
        c.src = "//" + r + "/" + i + "/widget.js";
        document.getElementsByTagName('head')[0].appendChild(c);
    }
    componentWillMount(prevProps, prevState) {
        this.blog("livescores", "cricapi.com", "widgets");
    }

    render() {
        return (<div id = 'cricapi_widget_livescores' > </div>);
    }
}

export default ScoreBlog;