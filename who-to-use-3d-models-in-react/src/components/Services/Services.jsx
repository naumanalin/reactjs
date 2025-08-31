import ComputerModelCanvas from "../computer-model/ComputerModelCanvas";

const Services = () => {
  return (
    <section id="services" className="section flex gap-8 py-3">
      {/* Left Article */}
      <article className="left w-1/2 space-y-4 text-gray-200">

      <h3 className="font-bold text-lg mt-6">1. Choose 3D model</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Serach: <span className="font-semibold">sketchlab</span> or{" "}
            <span>
              Go To <code>https://sketchfab.com/search</code>
            </span>
          </li>
          <li> Then search your 3D model like <code>mackbook, mug, etc.</code>  </li>
          <li>Then click on Download choose "gltf". <strong>if you do no change any thing like image etc. <br /> then directly download .glb</strong></li>
          <li> Note: Do not choose to heavy model because we are building website it have to fast. </li>
          <li> In some model we can change screenshot, for that open texturcheres folder open image in editor </li>
          <li> And don't forget to flip you image you past or that part you edit.</li>
        </ul>

        <h3 className="font-bold text-lg mt-6">2. Now transfer gltf file to glb file </h3>
        <ul className="list-disc list-inside space-y-2">
          <li> By using gltg-pipeline github repo. <a href="">(repo link)</a> </li>
          <li>
            Install using nodejs:{" "}
            <code className="bg-gray-800 px-1 rounded">
              npm install -g gltf-pipeline
            </code>
          </li>
          <li>
            Open terminal in model folder:{" "}
            <code className="bg-gray-800 px-1 rounded">
              gltf-pipeline -i modelName.gltf -b
            </code>
          </li>
          <li>  New file create Name it according to your need or use is as a it.  </li>
        </ul>

        <h3 className="font-bold text-lg mt-6">3. Now using this (glb) model we want to create React Component (.jsx) </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>  For that we need a library <code></code> github repo: https://github.com/pmndrs/gltfjsx</li>
          <li>We do not need to install any thing.</li>
          <li><code className="bg-gray-800 px-1 rounded">npx gltfjsx model.gltf --transform</code></li> 
          <li>or <code className="bg-gray-800 px-1 rounded">npx gltfjsx computer.glb </code></li>
          <li>Now this .jsx component require glb file fix that path.</li>
        </ul>
      </article>

      {/* Right Article (future for 3D models) */}
      <article className="right w-1/2 text-white">
        <ComputerModelCanvas/>
      </article>
    </section>
  );
};

export default Services;
