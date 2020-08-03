import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './videoPage.css';
import {PageHeader} from "antd";

const VideoPage = () => {
    const { videoId } = useParams();
    const history = useHistory();
    useEffect(() => {
        const iframe = document.createElement("iframe");
        iframe.id = "video-id";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.background = "transparent";
        iframe.style.position = "relative";
        iframe.style.margin = 0;
        iframe.style.border = "none";
        iframe.style.overflow ="hidden";
        iframe.style.display = "block";
        iframe.srcdoc = `
            <!doctype html>
            <html>
                <head></head>
                <body>
                    <div class="playbuzz"
                         data-id=${videoId}
                         data-show-share="false"
                         data-show-info="false"
                         data-comments="false"
                     ></div>
                    <script>
                        (function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];
                        if(d.getElementById(id))return;js=d.createElement(s);
                        js.id =id;js.src='https://embed.playbuzz.com/sdk.js';
                        fjs.parentNode.insertBefore(js,fjs);}
                        (document, 'script','playbuzz-sdk'));
                    </script>
                </body>
            </html>`;

        document.body.appendChild(iframe);

        return () => {
            document.body.removeChild(iframe);
        }
    }, []);

    return [
        <PageHeader
            className="site-page-header"
            onBack={() => history.goBack()}
            title="Go back home"
        />

    ];
};

export default VideoPage;
