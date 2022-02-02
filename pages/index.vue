<template>
	<div class="main-wrapper">
		<DynamicTabs :navigation="navigation">
			<template v-slot:Social>
				<keep-alive>
					<Social/>
				</keep-alive>
			</template>
			<template v-slot:Registration>
				<keep-alive>
					<Registration/>
				</keep-alive>
			</template>
			<template v-slot:Login>
				<keep-alive>
					<Login/>
				</keep-alive>
			</template>
		</DynamicTabs>
	</div>
</template>
<script>
    import DynamicTabs from '../components/DynamicTabs'
    import films from '../data.json'
    import Social from "../components/Social";
    import Login from "../components/Login";
    import Registration from "../components/Registration";

    export default {
        components: {
            Social,
            Login,
            Registration,
            DynamicTabs
        },
        data: function () {
            return {
                multiple: false,
                films: films,
                navigation: [
                    {title: 'Social'},
                    {title: 'Login',},
                    {title: 'Registration'}
                ],
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
