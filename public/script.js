// Форма поля ввода параметра поиска.
const formForSearch = document.getElementById('feild__input');
// Поле ввода параметра поиска
const feildForSearch = formForSearch.querySelector('.feild__input__search');
// Заголовок, отображающий параметр поиска.
const searchTitle = document.querySelector('.content__title');
// Кнопка поиска (лупа).
const searchBtn = document.querySelector('.feild__input__icon');
// Секция со списками исполнителей и альбомов.
const artistAndAlbums = document.querySelector('.artist__album__section');
// Список обектов-исполнителей.
const artists = artistAndAlbums.querySelectorAll('.artists__block')[0].querySelectorAll('.artist__block');
// Список объектов-альбомов.
const albums = artistAndAlbums.querySelectorAll('.artists__block')[1].querySelectorAll('.artist__block');
// Список кнопок трека.
const trackButtonsList = document.querySelectorAll('.tracks__line__buttons');
// Мой ключ.
const myApiKey = "502d7d64f573f4e8406b14d120b144fc";
// Список объектов-треков.
const trackList = document.querySelectorAll('.tracks__line');

/**
 * Осуществление поиска нажатием клавиши enter.
 */
formForSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    searchingEvent();
});

/**
 * Назначение обработчика клика на значок поиска (лупу).
 */
searchBtn.addEventListener('click', () => {searchingEvent(); });

/**
 * Назначение обработчика клика на сердечко у трека (нравится/не нравится).
 */
trackButtonsList.forEach(
    (track) => {
        const a = track.querySelectorAll('.controls__button')[1];
        a.addEventListener('click', (event) => {
            if (event.target.src.includes("heart-empty.svg"))
            {
                event.target.src = "./search/heart-fill.svg";
            } else 
            {
                event.target.src = "./search/heart-empty.svg";
            }
        });
    }
);

/**
 * Отображение параметра поиска, вызов функций для осуществления поиска по имени исполнителя, названию альбома и трека.
 */
function searchingEvent(){    
    show();
    searchTitle.textContent = `Search result for "${feildForSearch.value}"`;
    showArtistsSearchResult(feildForSearch.value);
    showAlbumSearchResult(feildForSearch.value);
    showTrackListSearchResult(feildForSearch.value);
}

/**
 * Отображение заставочного блока "NO RESULT", сокрытие блоков со списком исполнителей, альбомов и треков.
 */
function hide(){
    document.querySelector('.no__result').classList.remove('hidden');
    artistAndAlbums.classList.add('hidden');
    document.querySelector('.tracks').classList.add('hidden');
}

/**
 * Скрытие заставочного блока "NO RESULT", отображение блоков со списком исполнителей, альбомов и треков.
 */
function show(){
    document.querySelector('.no__result').classList.add('hidden');
    artistAndAlbums.classList.remove('hidden');
    document.querySelector('.tracks').classList.remove('hidden');
}

/**
 * Поиск по имени исполнителя.
 * @param {имя исполнителя, введенное пользователем} searchParametr 
 */
function showArtistsSearchResult(searchParametr){
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchParametr}&api_key=${myApiKey}&limit=${artists.length}&format=json`)
    .then(response => response.json())
    .then(list => {
        list = list.results.artistmatches.artist;
        if (list.length !== 0) {
            for (let i = 0; i < list.length; i++)
            {
                artists[i].querySelector('.artists__profile__text__bold').textContent = list[i].name;
                artists[i].querySelector('.listeners').textContent = list[i].listeners + " listeners";
                artists[i].style.backgroundImage = `url(${list[i].image[3]['#text']})`;
                artists[i].href = list[i].url;
            }
        } else hide();
    })
    .catch(
        (error) => {alert("Can't find data for searching by artist's name! " + error);}
    )
}

/**
 * Поиск по названию альбома.
 * @param {название альбома, введенное пользователем} searchParametr 
 */
function showAlbumSearchResult(searchParametr){
    fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchParametr}&api_key=${myApiKey}&limit=${albums.length}&format=json`)
    .then(response => response.json())
    .then(list => {
        list = list.results.albummatches.album;
        if (list.length !== 0) {
            for (let i = 0; i < list.length; i++)
            {
                albums[i].querySelector('.artists__profile__text__bold').textContent = list[i].name;
                albums[i].querySelector('.artistName').textContent = list[i].artist;
                albums[i].style.backgroundImage = `url(${list[i].image[3]['#text']})`;
                albums[i].href = list[i].url;
            }
        } else hide();
    })
    .catch(
        (error) => {alert("Can't find data for searching by album! " + error);}
    )
}

/**
 * Поиск по названию трека.
 * @param {название трека, введенное пользователем} searchParametr 
 */
function showTrackListSearchResult(searchParametr){
    fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchParametr}&api_key=${myApiKey}&limit=${trackList.length}&format=json`)
    .then(response => response.json())
    .then(list => {
        list = list.results.trackmatches.track;
        if (list.length !== 0) {
            for (let i = 0; i < list.length; i++)
            {
                trackList[i].querySelector('.artists__profile__text__bold').textContent = list[i].name;
                    trackList[i].querySelector('.artists__profile__text__bold').href = list[i].url;
                    trackList[i].querySelector('.about__track').querySelector('.track__link').textContent = list[i].artist;
                    trackList[i].querySelector('.about__track').querySelector('.track__link').href = list[i].url.split("/").slice(0,5).join("/");
                    trackList[i].querySelector('.tracks__line__icon').src = list[i].image[3]['#text'];
            }
        } else hide();
    })
    .catch(
        (error) => {alert("Can't find data for searching by track! " + error);}
    )
}