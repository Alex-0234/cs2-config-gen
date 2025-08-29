

document.addEventListener("DOMContentLoaded", () => {
    
    const buttonKeys = Array.from(document.querySelectorAll('.key'));

    buttonKeys.forEach(key => {
            if (key && key.id){
                let storedValue = localStorage.getItem(`${key.id}`);
                if (storedValue !== null ){
                    key.value = storedValue;
                }
            }
    })
    const Paths = document.querySelectorAll('.path');

    const body = document.querySelector('body');
    const headerContainer = document.getElementById('header');
    const titleText = document.getElementById('title');
    const scrollLogo = document.querySelector('.scroll-logo');
    const svgPic = document.querySelector('.pic');
    const output = document.getElementById('config-output');
    const code = output.querySelector('code');
    const help = document.getElementById('help-output')

    const generateButton = document.getElementById('generate');



    const myToggle = document.getElementById("myToggle");

        myToggle.addEventListener("change", () => {
            myToggle.checked ? body.classList.add('light-theme'):  body.classList.remove('light-theme');  
            svgPic.setAttribute('stop',' stop-color="var(--bg-color)"')
        });

        Paths.forEach((path, index) => {
            const length = path.getTotalLength();
            
            if (index % 2 === 0) {
                
                path.setAttribute('stroke-dasharray', '1,10');
                path.setAttribute('stroke-linecap', 'round');
                path.setAttribute('stroke-dashoffset', length);
                path.style.animation = 'animateSvg 20s alternate infinite';
            } else {
                
                path.setAttribute('stroke-dasharray', length);
                path.setAttribute('stroke-dashoffset', length);
                path.style.animation = 'animateSvg 4s alternate infinite';
            }
    });

    /* Header Animation */

    const maxHeight = 700; 
    const minHeight = 100;  

    window.addEventListener('scroll', () => {

        let newHeight = maxHeight - window.scrollY;

        if (newHeight < minHeight) newHeight = minHeight;
        if (newHeight > maxHeight) newHeight = maxHeight;

        if (newHeight < 300) {
            scrollLogo.style.opacity = '0';
            svgPic.style.opacity = '0';
            titleText.style.fontSize = '3rem'
        } else {
            scrollLogo.style.opacity = '1';
            svgPic.style.opacity = '1';
            titleText.style.fontSize = '5rem'
        }
        if(newHeight <= 150) {
            headerContainer.classList.remove('center-top-header');
            titleText.classList.add('center-left-title');
        }else {
            titleText.classList.remove('center-left-title');
            headerContainer.classList.add('center-top-header');
        }
        headerContainer.style.height = newHeight + 'px';
    });



    let outputMessage = ["//  Your generated config will appear here after filling out the form ",
        "//-------------------------------------------------------------------",
    ];
    code.innerHTML = outputMessage.join('\n');


    generateButton.addEventListener('click', (event) => {
        event.preventDefault(); 

            buttonKeys.forEach(key=> {
                key.style.color = "var(--text-color)";
                })

        const jumpScroll = document.getElementById('scrolljump-select').value;
        const jump = document.getElementById('jumpbutton').value;
        const buyMenu = document.getElementById('buyMenu').value;
        const forward = document.getElementById('forward').value;
        const backward = document.getElementById('backward').value;
        const left = document.getElementById('left').value;
        const right = document.getElementById('right').value;
        const walk = document.getElementById('walk').value;
        const duck = document.getElementById('duck').value;
        const primary = document.getElementById('primary').value;
        const secondary = document.getElementById('secondary').value;
        const reload = document.getElementById('reload').value;
        const lastWeapon = document.getElementById('lastWeapon').value;
        const drop = document.getElementById('drop').value;
        const use = document.getElementById('use').value;
        const autoBuy = document.getElementById('autoBuy').value;
        const rebuy = document.getElementById('rebuy').value;
        const scoreboard = document.getElementById('scoreboard').value;
        const console = document.getElementById('console').value;
                
        buttonKeys.forEach(key => {
            if (key && key.id){
                localStorage.setItem(`${key.id}`,`${key.value}`)
            }
        })
        
        if(!(bindRepetition(buttonKeys))) {

            let jumpscroll = null;

            let forwardKey = null;
            let backwardKey = null;
            let leftKey = null;
            let rightKey = null;
            let jumpKey = null;
            let walkKey = null;
            let duckKey = null;
            
            let primaryKey = null;
            let secondaryKey = null;
            let reloadKey = null;
            let lastWeaponKey = null;
            let dropKey = null;
            let useKey = null;
            let buyMenuKey = null;
            let autoBuyKey = null;
            let rebuyKey = null;
            let scoreboardKey = null;
            let consoleKey = null;


            /// === Bindings === ///
            if (jumpScroll === "ScrollUp") {
                jumpscroll = `bind "MWHEELUP" "+jump";`;
            } else if (jumpScroll === "ScrollDown") {
                jumpscroll = `bind "MWHEELDOWN" "+jump";`;
            } 
            else if (jumpScroll === "Both") {
                jumpscroll = `bind "MWHEELUP" "+jump";\nbind "MWHEELDOWN" "+jump";`;
            } else if (jumpScroll === "None") {
                jumpscroll = null;
            }


            forwardKey = `bind "${forward.toUpperCase()}" "+forward";`
            backwardKey = `bind "${backward.toUpperCase()}" "+back";`
            leftKey = `bind "${left.toUpperCase()}" "+moveleft";`
            rightKey = `bind "${right.toUpperCase()}" "+moveright";`
            jumpKey = `bind "${jump.toUpperCase()}" "+jump";`;
            walkKey = `bind "${walk.toUpperCase()}" "+speed";`;
            duckKey = `bind "${duck.toUpperCase()}" "+duck";`;

            primaryKey = `bind "${primary.toUpperCase()}" "+attack";`;
            secondaryKey = `bind "${secondary.toUpperCase()}" "+attack2";`;
            reloadKey = `bind "${reload.toUpperCase()}" "+reload";`;
            lastWeaponKey = `bind "${lastWeapon.toUpperCase()}" "lastinv";`;
            dropKey = `bind "${drop.toUpperCase()}" "drop";`;
            buyMenuKey = `bind "${buyMenu.toUpperCase()}" "buy";`;
            useKey = `bind "${use.toUpperCase()}" "+use";`;
            autoBuyKey = `bind "${autoBuy.toUpperCase()}" "buy quickbuy";`;
            rebuyKey = `bind "${rebuy.toUpperCase()}" "rebuy";`;
            scoreboardKey = `bind "${scoreboard.toUpperCase()}" "+showscores";`;
            consoleKey = `bind "${console.toUpperCase()}" "toggleconsole";`;



            outputMessage = ["Your generated config will appear here after filling out the form ",
            "------------------------------------------------------------------------------------------------------",
            ];
            outputMessage = outputMessage.concat("//Default Movement Binds".split('\n'))
            if (forward) {
                outputMessage = outputMessage.concat(forwardKey.split('\n'));
            }
            if (backward) {
                outputMessage = outputMessage.concat(backwardKey.split('\n'));
            }
            if (left) {
                outputMessage = outputMessage.concat(leftKey.split('\n'));
            }
            if (right) {
                outputMessage = outputMessage.concat(rightKey.split('\n'));
            }
            if (jump) {
                outputMessage.push(jumpKey);
            }
            
            if (jumpscroll) {
                outputMessage = outputMessage.concat("".split('\n'))
                outputMessage = outputMessage.concat("//Jumpscroll".split('\n'))
                outputMessage = outputMessage.concat(jumpscroll.split('\n'));
            }
            outputMessage = outputMessage.concat("".split('\n'))
            outputMessage = outputMessage.concat("//Basic actions".split('\n'))
            if (primary) {
                outputMessage.push(primaryKey);
            }
            if (secondary) {
                outputMessage.push(secondaryKey);
            }
            if (reload) {
                outputMessage.push(reloadKey);
            }
            if (lastWeapon) {
                outputMessage.push(lastWeaponKey);
            }
            if (drop) {
                outputMessage.push(dropKey);
            }
            if (use) {
                outputMessage.push(useKey);
            }
            if (buyMenu) {
                outputMessage.push(buyMenuKey);
            }
            if (autoBuy) {
                outputMessage.push(autoBuyKey);
            }
            if (rebuy) {
                outputMessage.push(rebuyKey);
            }
            if (scoreboard) {
                outputMessage.push(scoreboardKey);
            }
            if (console) {
                outputMessage.push(consoleKey);
            }

            code.innerHTML = outputMessage.join('\n');
        };
    });
    const keys = document.querySelectorAll('svg rect[data-key]');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            help.textContent = `Key pressed: ${key.dataset.key}`;
        });
    });
});

/* Checking for Repetition */
function bindRepetition(keyArray) {
    const dupeInfo = document.getElementById('dupe-info');
    let values = keyArray.map(k => k.value.trim().toUpperCase()).filter(v => v !== "");
    let duplicates = values.filter((val, i, arr) => arr.indexOf(val) !== i);

    if (duplicates.length > 0) {
        keyArray.forEach(key => {
            duplicates.forEach(val => {
                if(key.value === val) {
                    key.style.color = 'red';
                    return true;
                } else {
                    return false;
                }

            })
        }) 
        dupeInfo.innerHTML = `There are some duplicates : ${duplicates.join(',')}.
          If you're sure, change the key to whatever (CHANGELATER etc.) and edit later.`
    }
}






            // let activeKey = null;
            // buttonKeys.forEach(key=> {
            //     key.addEventListener('click', ()=> {
            //         activeKey = key;
            //     })

            //     const cs2KeyMap = {
            //             // Letters
            //             a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g",
            //             h: "h", i: "i", j: "j", k: "k", l: "l", m: "m",
            //             n: "n", o: "o", p: "p", q: "q", r: "r", s: "s",
            //             t: "t", u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",

            //             // Number row
            //             "0": "0", "1": "1", "2": "2", "3": "3", "4": "4",
            //             "5": "5", "6": "6", "7": "7", "8": "8", "9": "9",

            //             // Function keys
            //             f1: "F1", f2: "F2", f3: "F3", f4: "F4", f5: "F5",
            //             f6: "F6", f7: "F7", f8: "F8", f9: "F9", f10: "F10",
            //             f11: "F11", f12: "f12",

            //             // Modifiers
            //             shift: "SHIFT", ctrl: "ctrl", rctrl: "rctrl",
            //             alt: "alt", ralt: "ralt", capslock: "capslock",
            //             tab: "tab", enter: "enter", backspace: "backspace",
            //             space: "SPACE",

            //             // Navigation
            //             uparrow: "uparrow", downarrow: "downarrow",
            //             leftarrow: "leftarrow", rightarrow: "rightarrow",
            //             ins: "ins", home: "home", pgup: "pgup",
            //             del: "del", end: "end", pgdn: "pgdn",

            //             // Symbols / punctuation
            //             semicolon: "semicolon", "'": "'", comma: ",",
            //             period: ".", slash: "/", backslash: "\\",
            //             "[": "[", "]": "]",

            //             // Numpad
            //             kp_1: "kp_1", kp_2: "kp_2", kp_3: "kp_3",
            //             kp_4: "kp_4", kp_5: "kp_5", kp_6: "kp_6",
            //             kp_7: "kp_7", kp_8: "kp_8", kp_9: "kp_9",
            //             kp_0: "kp_0", kp_enter: "kp_enter", kp_plus: "kp_plus",
            //             kp_minus: "kp_minus", kp_multiply: "kp_multiply",
            //             kp_divide: "kp_slash", kp_del: "kp_del",
            //             };

            //     key.addEventListener('keypress', (e)=> {
            //         if (!activeKey) return;

            //         let key = e.key.toLowerCase();
            //         let bindName = cs2KeyMap[key] || key.toUpperCase(); // fallback to uppercase

            //         activeKey.value = bindName;
            //         activeKey = null;
            // });
