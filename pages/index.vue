<template>
	<div class="main-wrapper">
		<h1 v-spoiler="{ startBlurEvent: 'click', endBlurEvent: 'mouseout' }">Введите запрос</h1>
	</div>
</template>
<script>
    import films from '../data.json'

    export default {
        data: function () {
            return {
                multiple: false,
                films: films,
                list: []
            }
        },
        directives: {
            spoiler: {
                inserted: function (el, binding) {
                    el.style.background = 'black'
                    el.style.color = 'black'
                    el.addEventListener(binding.value.startBlurEvent, () => {
                        el.style.background = 'inherit'
                        el.style.color = 'inherit'
                    })
                    el.addEventListener(binding.value.endBlurEvent, () => {
                        el.style.background = 'black'
                        el.style.color = 'black'
                    })
                }
            }
        }
    }
</script>
<style scoped>
	*,
	body {
		box-sizing: border-box;
		font-family: Arial, sans-serif;
	}

	.main-wrapper {
		display: flex;
		width: 100%;
		height: 100vh;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}

	.checkbox {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
</style>
