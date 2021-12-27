import env from "../../../../env";

const requireSecret = (req) =>
{
	if(req.params.secret != env.admin.secret)
	{
		throw "No access.";
	}
};

export {requireSecret};