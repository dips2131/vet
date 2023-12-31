import React from 'react'

const SampleModal = () => {
  return (
    <>
     <div class="container demo">
	<div class="text-center">
		<button type="button" class="btn btn-demo" data-toggle="modal" data-target="#myModal">
			Left Sidebar Modal
		</button>

		<button type="button" class="btn btn-demo" data-toggle="modal" data-target="#myModal2">
			Right Sidebar Modal
		</button>
	</div>

	{/* <!-- Modal --> */}
	<div class="modal left fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">

				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Left Sidebar</h4>
				</div>

				<div class="modal-body">
					<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					</p>
				</div>

			</div>
            {/* <!-- modal-content --> */}
		</div>
        {/* <!-- modal-dialog --> */}
	</div>
    {/* <!-- modal --> */}
	
	{/* <!-- Modal --> */}
	<div class="modal right fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
		<div class="modal-dialog" role="document">
			<div class="modal-content">

				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel2">Right Sidebar</h4>
				</div>

				<div class="modal-body">
					<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					</p>
				</div>

			</div>
            {/* <!-- modal-content --> */}
		</div>.
        {/* <!-- modal-dialog --> */}
	</div>
    {/* <!-- modal --> */}
	
	
</div>
{/* <!-- container --> */}

<footer class="demo-footer">
	<a href="http://www.bootpen.com" target="_blank">Get more code snippets</a>
</footer>
    </>
  )
}

export default SampleModal