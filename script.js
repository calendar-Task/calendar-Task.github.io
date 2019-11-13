var app = new Vue ({
		el:'#app',
		data: {
			 srcIcon:"icon/logo.png",
  				
			items: [

				{title: 'О нас', href: 'about.html', class:'anyDropdown'},
				{title: 'Услуги', href: '/about.html', class:'dropdown'},
				{title: 'Вакансии', href: '/about.html', class:'anyDropdown'},
				{title: 'Новости', href: '/about.html', class:'anyDropdown'},
				{title: 'Соглашение', href: '/about.html', class:'dropdown'}
			]

		}

})