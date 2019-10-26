// с помощью функции get можно получить текущее значение стора, без подписки.
import { get } from 'svelte/store';

// Импорт всех переменных из хранилища cannon
import { angle, direction } from '../stores/cannon.js';

// Функция обновления угла поворота пушки
export function rotateCannon() {
    // Получаем текущий угол поворота
    const currentAngle = get(angle);
    // В зависимости от того, какая кнопка зажата, обновляем угол поворота
    switch (get(direction)) {
        // Если зажата кнопка "влево" и угол поворота меньше -45°,
        // то уменьшаем угол поворота на 0.4
        case 'left':
            if (currentAngle > -45) angle.update(a => a - 0.4);
            break;
        // Если зажата кнопка "вправо" и угол поворота меньше 45°,
        // то увеличиваем угол поворота на 0.4
        case 'right':
            if (currentAngle < 45) angle.update(a => a + 0.4);
            break;
        default:
            break;
    }
}