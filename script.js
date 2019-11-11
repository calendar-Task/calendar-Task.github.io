var app = new Vue ({
		el:'#app',
		data: {
			 src:"icon/logo.png",
  				
			items: [
				{title: 'Home', href: 'index.html'},
				{title: 'About Us', href: 'about.html'},
				{title: 'Servisec', href: '/about.html', class:'dropdown'},
				{title: 'Careers', href: '/about.html'},
				{title: 'News', href: '/about.html'},
				{title: 'Documentation', href: '/about.html'}
			]

		}

})