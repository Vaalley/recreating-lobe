<main class="flex flex-col items-center text-darker mt-16 mb-32">
	<h1 class="text-[5rem] font-bold">Lobe <span class="text-primary">Tour</span></h1>
	<p class="text-3xl w-[620px] text-center mt-4">
		Build your first machine learning model in ten minutes. No code or experience required.
	</p>
	<img
		class="w-3/5 min-w-[700px] mt-16 mb-32 mx-16 rounded-3xl hover:cursor-pointer"
		src="/images/Video.jpg"
		alt="Learn more about Lobe by watching our tour video."
	/>
	<h2 class="text-7xl font-bold w-[500px] text-center leading-tight tracking-tight">
		Train your app with Lobe
	</h2>
	<button
		class="bg-primary text-white font-bold text-2xl py-4 px-12 rounded-full not-selectable w-fit mt-16"
		>Download</button
	>
</main>

<style>
	button:hover {
		transform: scale(1.05);
	}

	button {
		transition: all 0.2s ease-in-out;
	}

	img:hover {
		transform: scale(1.02);
		/* add a shadow */
		box-shadow: 0px 33px 80px -36px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0px 33px 80px -36px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0px 33px 80px -36px rgba(0, 0, 0, 0.3);
	}

	img {
		transition: all 0.3s ease-in-out;
	}

	::selection {
		background-color: #d0fcf4;
	}

	.not-selectable {
		user-select: none;
	}
</style>
