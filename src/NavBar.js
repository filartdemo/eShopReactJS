import "./NavBar.css";

function NavBar() {
	return (
		<div className="NavBar">
			<nav
				class="navbar navbar-expand-lg bg-body-tertiary rounded"
				aria-label="Eleventh navbar example">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						<strong>ReactCart</strong>
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navBarReactCart"
						aria-controls="navBarReactCart"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navBarReactCart">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Link
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
