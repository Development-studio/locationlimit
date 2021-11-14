var stat = 0 // 0 - blacklist / 1 - whitelist
var regions = ['US','RU'] // https://www.artlebedev.ru/country-list/ u may check region codes here
var reason = 'U have been kicked' // kick reason

function lol(status,result){
	if (!file.exists(path)) {
		file.writeTo(path, '')}
	let ipinf = JSON.parse(result)
	log(regions.includes(ipinf.countryCode))
	if (stat == 1){
		if (regions.includes(ipinf.countryCode) == false){
    		file.writeTo(path, '1')
		}
	}else{
		if (regions.includes(ipinf.countryCode)){
    		file.writeTo(path, '1')
		}
	}
}

mc.listen("onPreJoin",function(player){
	file.writeTo(path, '0')
	let dv = player.getDevice()
  	let ip = dv.ip.split(':',2)
	network.httpGet('http://ip-api.com/json/' + ip[0],lol)
	setTimeout(() => { 
	let kck = file.readFrom(path)
	if (kck == '1'){
		player.kick(reason)
	}
	},500)
})

var path = './plugins/temp/locationlimit.json'