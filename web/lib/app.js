var app = {};
(function (app) 
{

	app.pre0 = function(number)
	{
		if(number == null)
			return 0;
		return number.toFixed(2)
	}

	app.pre1 = function(number)
	{
		if(number == null)
			return 0;
		return (number / 10000).toFixed(2);
	}

	app.pre2 = function(number)
	{
		if(number == null)
			return 0;
		return Math.round(number)
	}

	app.pre3 = function(number)
	{
		if(number == null)
			return 0;
		return number.toFixed(2)
	}

	app.pre4 = function(number)
	{
		return number
	}

	app.isNumber = function(number)
	{
		if(parseFloat(number).toString() == "NaN" ) 
		{
			return false;
		} 
		else
		{
			return true;
		}
	}

	app.toNumber = function(number)
	{
		if(app.isNumber(number)) 
		{
			return parseFloat(number);
		} 
		else
		{
			return 0;
		}
	}

	app.isNumberValue = function($fileds)
	{
		var result = null;
		$.each($fileds, function(i, filed)
		{
			if( !app.isNumber($(filed).val()) )
			{
				result = $(filed);
				return false;
			}
		});
		return result;
	}

})(app);