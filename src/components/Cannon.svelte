<script>
    // Импортируем угол поворота из хранилища
    import { angle } from "../stores/cannon.js";
</script>

<style>
    /* Сместим центр трансформации, чтобы наша пушка вращалась вокруг нижней грани */
    .cannon {
        transform-origin: 4px 55px;
    }
</style>

<!-- Наша пушка всего лишь прямоугольник svg элемента.
      Обертка элементом <g> нужна для корректной трансформации -->
<!-- Поворачиваем пушку директивой rotate(${$angle})-->
<g class="cannon" transform={`translate(236, 700) rotate(${$angle})`}>
    <rect width="8" height="60" fill="#212121" />
</g>