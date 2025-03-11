import './css/reset.css';
import './css/style.css';

window.addEventListener('DOMContentLoaded', () => {
	initImages();
	initGridLayout();
	setActiveFilter();
});

function initImages() {
	const images = document.querySelectorAll('.article-item__img');

	if (images.length) {
		images.forEach((image) => {
			const imageItem = image.querySelector('.article-item__img img');
			const padding = (imageItem.offsetHeight / imageItem.offsetWidth) * 100;

			image.style.cssText = `padding-bottom: ${padding}%`;
			imageItem.classList.add('init');
		});
	}
}

function initGridLayout() {
	const items = document.querySelector('.articles__list');
	const gridItems = new Isotope(items, {
		itemSelector: '.article-item',
		masonry: {
			fitWidth: true,
			gutter: 20,
		},
	});

	function setActiveFilter() {
		const filters = document.querySelectorAll('.filter-articles__item');

		filters.forEach((filter) => {
			filter.addEventListener('click', (e) => {
				if (e.target.closest('.filter-articles__item')) {
					e.preventDefault();

					const filterData = filter.dataset.filter;
					const activeFilterItem = document.querySelector(
						'.filter-articles__item.active',
					);

					filterData === '*'
						? gridItems.arrange({ filter: `` })
						: gridItems.arrange({ filter: `[data-filter="${filterData}"]` });

					activeFilterItem.classList.remove('active');
					activeFilterItem.classList.add('active');
				}
			});
		});
	}

	setActiveFilter();
}
