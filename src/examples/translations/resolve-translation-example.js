import styles from '../../styles.css';
import markdownStyles from '../../markdown.css';
import markdown from './README.md';

function start(params) {
    /*
        el:         contains the element the custom script can use to attach itself to
        config:     contains everything from the scriptConfig in the XC
        options:    contains some utility functions for custom scripts (see examples for more information)
     */
    const {el, config, options} = params;

    const {resolveTranslation} = options;
    const translationKey = 'global.default_title';
    const translation = resolveTranslation(translationKey);

    el.innerHTML = `
        <style type="text/css">
            ${styles}
        </style>
        <style type="text/css">
            ${markdownStyles}
        </style>
        <div class="rb-example__example rb-example__resolve-translation">
            <div class="rb-example__documentation markdown-body">
                ${markdown}
            </div>
            
            <div class="rb-example__translation">
                "${translationKey}" resolved to "${translation}"
            </div>
        </div>
    `

    return Promise.resolve({stop: () => {
        console.log('stop');
    }});
}

export {start};
