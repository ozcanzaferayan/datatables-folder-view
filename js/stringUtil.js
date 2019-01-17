String.prototype.turkishToUpper = function(){
    var string = this;
    var letters = { "i": "İ", "ş": "Ş", "ğ": "Ğ", "ü": "Ü", "ö": "Ö", "ç": "Ç", "ı": "I" };
    string = string.replace(/(([iışğüçö]))/g, function(letter){ return letters[letter]; })
    return string.toUpperCase();
}

String.prototype.turkishToLower = function(){
    var string = this;
    var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
    string = string.replace(/(([İIŞĞÜÇÖ]))/g, function(letter){ return letters[letter]; })
    return string.toLowerCase();
}

String.prototype.toCamelCase = function()
{
	var str = this.turkishToLower();
	var parts = str.split(" ");
	for (var i = 0; i < parts.length; i++) {
		parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].substr(1);
	}
	return parts.join(' ');
};

String.prototype.removeKurumAdi = function()
{
  return this.split(";")[0];
};