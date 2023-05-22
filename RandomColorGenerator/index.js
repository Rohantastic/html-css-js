const button = document.getElementById('buttn');
        button.addEventListener('click',()=>{
            const color = Math.floor(Math.random()*16777215);
            const colorCode = '#' + color.toString(16);
            const body = document.querySelector('.main');
            body.style.backgroundColor = colorCode;
            const text = document.getElementById('text');
            text.innerText = colorCode;
        });