const $audio = document.getElementById('audio'),
    $score = document.getElementById('score'),
    $steps = document.getElementById('steps'),
    $timer = document.getElementById('timer'),
    $board = document.getElementById('board'),
    $start = document.getElementById('start'),
    cards = [
        {
            find: 'gazelle',
            image:'https://www.hamaarag.org.il/sites/default/files/styles/species_gallery/public/species_images/Aguda/Gazella%20gazella%20-%20Amir%20Ayalon.jpg?itok=DUN85LGa'
        },
        {
            find: 'wolf',
            image: 'https://s3.eu-central-1.amazonaws.com/mypenhe/articles/243551/1.jpg'
        },
        {
            find: 'leviathan',
            image: 'https://i.ytimg.com/vi/-NmTVm_bG3U/maxresdefault.jpg'
        },
        {
            find: 'lion',
            image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBkk7IK.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=1380&y=944'
        },
        {
            find: 'eagle',
            image: 'https://sfilev2.f-static.com/image/users/215828/ftp/my_files/sop-resize-600-3442519-american-eagle-wallpapers.jpg'
        },
        {
            find: 'donkey',
            image: 'https://storage.hidabroot.org/articles_new/120791_tumb_750Xauto.jpg'
        },
    ],

    selectUser = [];


let timerCnt = 0,
    scoreCnt = 0,
    stepsCnt = 0;

const shuffle = (arrayOfImages) => {
    let count = arrayOfImages.length;

    while (count > 0) {
        let rand = Math.floor(Math.random() * count);
        count--;
        let temp = arrayOfImages[count];
        arrayOfImages[count] = arrayOfImages[rand];
        arrayOfImages[rand] = temp;
    }
    return arrayOfImages;
}

const countTime = () => {
    ++timerCnt;
    $timer.innerText = timerCnt;
}

const countSteps = () => {
    ++stepsCnt;
    $steps.innerText = stepsCnt;
}

const checkGameStatus = () => {
    //TBD: if have cards to open
}

const calcScore = () => {

    const ratingBest = (cards.length / 2) + 2,
        ratingMedium = cards.length,
        ratingLow = (cards.length * 1.5);

    const isBest = stepsCnt <= ratingBest,
        isMedium = stepsCnt >= ratingMedium && stepsCnt < ratingLow,
        isLow = stepsCnt >= ratingLow;

    if (isBest) {
        scoreCnt = 3;
    }
    else if (isMedium) {
        scoreCnt = 2;
    }
    else if (isLow) {
        scoreCnt = 1;
    }
}

const startGame = () => {
    const shuffledCards = shuffle([...cards, ...cards]);

    shuffledCards.forEach((card) => {
        const liElement = document.createElement('li');
        liElement.dataset.find = card.find;

        const imgElement = document.createElement('img');
        imgElement.src = card.image;
        imgElement.alt = card.find;
        imgElement.title = card.find;

        liElement.appendChild(imgElement);
        $board.appendChild(liElement);

    })
}

startGame();