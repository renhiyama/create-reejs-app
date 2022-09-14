export default function(props) {
    return <div>
      <p className="text-indigo-500">Whats Up with this: {props.req.context.params.id}</p>
      <a className="btn-green" href="/">Go Home!</a>
    </div>;
}