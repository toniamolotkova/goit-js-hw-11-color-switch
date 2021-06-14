const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    bodyColor: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const changeColor = {
   
    intervalId: null,
    isActive: false,
    
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;

        this.intervalId = setInterval(() => {
                
        const randomColorIndex = randomIntegerFromInterval(0, colors.length - 1);
        refs.bodyColor.style.backgroundColor = colors[randomColorIndex];
            
        }, 1000);
    },

    stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    }    
}

refs.startBtn.addEventListener('click', changeColor.start.bind(changeColor));
refs.stopBtn.addEventListener('click', changeColor.stop.bind(changeColor));

