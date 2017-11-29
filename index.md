---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Startseite
description: Dies ist meine persönliche Seite, auf welcher du einiges über mich und meine Arbeit erfahren kannst.
weight: 1
---
<section id="content" class="bg-primary">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2 text-center">
				<h2 class="section-heading">About me</h2>
				<hr class="light">
				<p class="text-faded">Hm, was gibt es alles über mich zu wissen?<br>Ich heiße Lars, bin im Internet unter dem Pseudonym elyday unterwegs und bin 18 Jahre alt. In meiner begrenzten Freizeit fahre ich sehr viel Rad und bin auch noch als Schiedsrichter unterwegs.</p>
				<a href="#services" class="btn btn-default btn-xl page-scroll">Fähigkeiten</a>
			</div>
		</div>
	</div>
</section>
<section id="services">
	<div class="container">
		<div class="col-lg-8 col-lg-offset-2 text-center">
			<h2 class="section-heading">Fähigkeiten</h2>
			<hr class="primary">
		</div><br><br><br>
		<div class="progress">
			<div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" class="progress-bar progress-bar-success progress-bar-striped active">HTML: Fortgeschritten</div>
		</div>
		<div class="progress">
			<div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 45%;" class="progress-bar progress-bar-success progress-bar-striped active">PHP: Fortgeschritten</div>
		</div>
		<div class="progress">
			<div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 15%;" class="progress-bar progress-bar-danger progress-bar-striped active">Java: Anfänger</div>
		</div>
		<div class="progress">
			<div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%;" class="progress-bar progress-bar-danger progress-bar-striped active">Node.js: Anfänger</div>
		</div>
		<div class="col-lg-8 col-lg-offset-2 text-center">
			<a href="#portfolio" class="btn btn-primary btn-xl page-scroll">Portfolio</a>
		</div>
	</div>
</section>
<section id="portfolio" class="no-padding">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 text-center">
				<h2 class="section-heading">Portfolio</h2>
				<hr class="primary">
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row no-gutter">
			<div class="col-lg-4 col-sm-6">
				<div class="portfolio-box"><img src="{{ "/assets/img/portfolio/ucp.png" | relative_url }}" alt="" class="img-responsive">
					<div class="portfolio-box-caption">
						<div class="portfolio-box-caption-content">
							<div class="project-category text-faded">Programmierung (PHP)</div>
							<div class="project-name">San Fierro Roleplay User Control Panel<br></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-sm-6">
				<div class="portfolio-box"><img src="{{ "/assets/img/portfolio/s4yt.png" | relative_url }}" alt="" class="img-responsive">
					<div class="portfolio-box-caption">
						<div class="portfolio-box-caption-content">
							<div class="project-category text-faded">Programmierung</div>
							<div class="project-name">SAMP4YOU Teamseite<br><a href="http://team.samp4you.com">Zur Referenz</a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-sm-6">
				<div class="portfolio-box"><img src="{{ "/assets/img/portfolio/shp.png" | relative_url }}" alt="" class="img-responsive">
					<div class="portfolio-box-caption">
						<div class="portfolio-box-caption-content">
							<div class="project-category text-faded">Konzeptionierung - Programmierung</div>
							<div class="project-name">School Hours Plan<br><a href="https://shp.eynet.xyz">Zur Referenz</a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-sm-6">
				<div class="portfolio-box"><img src="{{ "/assets/img/portfolio/gradesManagement.png" | relative_url }}" alt="" class="img-responsive">
					<div class="portfolio-box-caption">
						<div class="portfolio-box-caption-content">
							<div class="project-category text-faded">Konzeptionierung - Programmierung</div>
							<div class="project-name">Grades Management<br><a href="http://grades.elyday.net">Zur Referenz</a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-sm-6">
				<div class="portfolio-box"><img src="{{ "/assets/img/portfolio/jh-werk.jpg" | relative_url }}" alt="" class="img-responsive">
					<div class="portfolio-box-caption">
						<div class="portfolio-box-caption-content">
							<div class="project-category text-faded">Programmierung</div>
							<div class="project-name">Jugend Hilfs Werk<br></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
