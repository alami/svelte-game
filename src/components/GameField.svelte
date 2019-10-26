<script>
    // Импортируем компонент пушки
    import Cannon from "./Cannon.svelte";
</script>
<style>
    /* Сделаем так, чтобы наше игровое поле растягивалось на весь экран */
    .container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        max-height: 100%;
    }
</style>

<div class="container">
    <!-- Благодаря указанию атрибута viewBox пропорции нашего
           игрового поля будут сохраняться при изменении размеров -->
    <svg viewBox="0 0 480 800">
        <!-- Отображаем компонент пушки -->
        <Cannon />
    </svg>
</div>