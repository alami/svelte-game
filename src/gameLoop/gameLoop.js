// Импортируем переменную из хранилища
import { isPlaying } from '../stores/game';
// с помощью функции get можно получить текущее значение стора, без подписки.
import { get } from 'svelte/store';
// импортируем обработчик поворота пушки
// Импортируем все обработчики событий пушки и снарядов
import { rotateCannon, shoot, moveBullet, clearBullets } from "./cannon";
// импортируем обработчик столкновений
import { checkCollision } from './game';
// Импортируем все обработчики событий врагов
import { addEnemy, moveEnemy } from './enemy';

// Функция отвечает за игровой цикл
function startLoop(steps) {
    window.requestAnimationFrame(() => {
        // Проходим по массиву игровых шагов
        steps.forEach(step => {
            // Если шаг функция - запускаем
            if (typeof step === 'function') step();
        });
        // Если игра не остановилась, планируем следующий цикл
        if (get(isPlaying)) startLoop(steps);
    });
}

// Функция отвечает за запуск игрового цикла
export const startGame = () => {
    // Устанавливаем переменную, которая хранит состояние игры в true
    isPlaying.set(true);
    // запускаем игровой цикл. Пока массив шагов пустой
    // добавим обработчики в игровой цикл
    // добавим обработчики в игровой цикл
    // добавим обработчик в игровой цикл
    startLoop([rotateCannon, shoot, moveBullet, clearBullets, addEnemy, moveEnemy, checkCollision]);
};
// Функция отвечает за остановку игрового цикла
export function stopGame() {
    // Устанавливаем переменную, которая хранит состояние игры в false
    isPlaying.set(false);
}