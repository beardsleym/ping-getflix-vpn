const hosts = [
  {
    country: 'Angola',
    city: 'Ambriz',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'ao-am-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Australia',
    city: 'Melbourne',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'au-mel-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Australia',
    city: 'Newcastle',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'au-nw-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Australia',
    city: 'Sydney',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'au-sy.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Australia',
    city: 'Sydney 2',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'au-sy2.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Australia',
    city: 'Sydney 3',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'au-sy3-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Australia',
    city: 'Queensland',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'au-qn-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Austria',
    city: 'Vienna',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'at-vn-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Brazil',
    city: 'Sao Paulo',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'br-sp-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Bolivia',
    city: 'Santa Cruz',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'bo-sc-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Canada',
    city: 'Halifax',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'ca-hl2-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Canada',
    city: 'Montreal',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'ca-mr.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Canada',
    city: 'Montreal 2',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'ca-mr2-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Canada',
    city: 'Toronto',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'ca-tor2-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Canada',
    city: 'Vancouver 2',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'ca-vn2-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'China',
    city: 'Beijing',
    protocols: 'SSTP',
    address: 'cn-bj-sstp.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Denmark',
    city: 'Copenhagen',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'dk-cp-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Denmark',
    city: 'Copenhagen',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'dk-cp.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Denmark',
    city: 'Copenhagen',
    protocols: 'L2TP, SSTP',
    address: 'dk-cp-sstp.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'France',
    city: 'Paris',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'fr-pr.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'France',
    city: 'Paris 2',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'fr-pr2-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Germany',
    city: 'Hamburg',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'de-hm-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Germany',
    city: 'Nuremberg',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'de-nr.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Germany',
    city: 'Nuremberg',
    protocols: 'L2TP, SSTP',
    address: 'de-nr-sstp.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Germany',
    city: 'Nuremberg',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'de-nr-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Greece',
    city: 'Athens',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'gr-at.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Hong Kong',
    city: 'Hong Kong',
    protocols: 'L2TP, SSTP',
    address: 'hk-sstp.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'Hong Kong',
    city: 'Hong Kong',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'hk.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'India',
    city: 'Pune',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'in-pn-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Ireland',
    city: 'Dublin',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'ie-db.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Ireland',
    city: 'Waterford 2',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'ie-wt2-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Italy',
    city: 'Milan',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'it-ml-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Italy',
    city: 'Venice',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'it-vn.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'Japan',
    city: 'Tokyo',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'jp-tk-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Kyrgyzstan',
    city: 'Bishkek',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'kg-sh-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Malaysia',
    city: 'Selangor',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'my-sl.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Mexico',
    city: 'Cabo San Lucas',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'mx-cb.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'Mexico',
    city: 'Rosarito',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'mx-rs-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Mozambique',
    city: 'Maputo',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'mz-mp-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Nepal',
    city: 'Kathmandu',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'np-kt-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Netherlands',
    city: 'Amsterdam',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'nl-am2-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Netherlands',
    city: 'Amsterdam',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'nl-am2.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'Netherlands',
    city: 'Amsterdam',
    protocols: 'L2TP, SSTP',
    address: 'nl-am2-sstp.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'New Zealand',
    city: 'Auckland',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'nz-ac-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'New Zealand',
    city: 'Auckland',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'nz-ac-serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Norway',
    city: 'Oslo',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'no-os.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Russia',
    city: 'Novosibirsk',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'ru-nv-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Saudi Arabia',
    city: 'Riyadh',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'sa-ry.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Singapore',
    city: 'Singapore',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'sg-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Singapore',
    city: 'Singapore',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'sg2-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'South Africa',
    city: 'Johannesburg',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'za-jh-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'South Korea',
    city: 'Seoul',
    protocols: 'PPTP, OpenVPN',
    address: 'kr-sl-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Sudan',
    city: 'Sudan',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'sd.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'Spain',
    city: 'Valencia',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'es-vl-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'Spain',
    city: 'Valencia',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'es-vl.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Sweden',
    city: 'Stockholm',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'se-st-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Sweden',
    city: 'Stockholm',
    protocols: 'L2TP, SSTP',
    address: 'se-st-sstp.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'Switzerland',
    city: 'Zurich',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'ch-zr.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Switzerland',
    city: 'Zurich',
    protocols: 'L2TP, SSTP',
    address: 'ch-zr-sstp.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Switzerland',
    city: 'Zurich',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'ch-zr2.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'Turkey',
    city: 'Istanbul',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'tr-is.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'Turkey',
    city: 'Istanbul',
    protocols: 'L2TP, SSTP',
    address: 'tr-is-sstp.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'Ukraine',
    city: 'Kiev',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'ua-kv.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'United Kingdom',
    city: 'Canterbury',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'uk-can.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'United Kingdom',
    city: 'Hull',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'uk-hl-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'United Kingdom',
    city: 'London 1',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'uk-lon1-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'United Kingdom',
    city: 'London 1',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'uk-lon1.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United Kingdom',
    city: 'London 1',
    protocols: 'L2TP, SSTP',
    address: 'uk-lon1-sstp.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - Center',
    city: 'Chicago',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-ch.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States',
    city: 'Delaware',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-dl2.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'United States - West',
    city: 'Los Angeles 1',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-la1.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - West',
    city: 'Los Angeles 2',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-la2.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - West',
    city: 'Los Angeles 2',
    protocols: 'L2TP, SSTP',
    address: 'us-la2-sstp.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - West',
    city: 'Los Angeles 3',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-la3-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'United States - West',
    city: 'Los Angeles 3',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-la3.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - West',
    city: 'Los Angeles 3',
    protocols: 'L2TP, SSTP',
    address: 'us-la3-sstp.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - East',
    city: 'Miami 2',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-mi2.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'United States -',
    city: 'Minneapolis',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-mn2-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'United States - West',
    city: 'San Jose',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-sj.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States',
    city: 'San Francisco',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-sf2.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'United States',
    city: 'Savannah',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-sav.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'United States - West',
    city: 'Silicon Valley',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-sv.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - East',
    city: 'Miami',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-mi2.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'No'
  },
  {
    country: 'United States - East',
    city: 'New York city',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-nyc.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - East',
    city: 'New York 1',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-ny1-smart.serverlocation.co',
    p2p: 'No',
    smartvpn: 'YES'
  },
  {
    country: 'United States - East',
    city: 'New York 1',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-ny1.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - East',
    city: 'New York 2',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-ny2.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - East',
    city: 'New York 2',
    protocols: 'L2TP, SSTP',
    address: 'us-ny2-sstp.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - East',
    city: 'Orlando (Florida)',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-or.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - East',
    city: 'Washington DC',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-wdc.serverlocation.co',
    p2p: 'No',
    smartvpn: 'No'
  },
  {
    country: 'United States - East',
    city: 'Washington DC 2',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'us-wdc2-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  },
  {
    country: 'Vietnam',
    city: 'Ho Chi Minh city',
    protocols: 'PPTP, L2TP, OpenVPN',
    address: 'vn-hc-smart.serverlocation.co',
    p2p: 'YES',
    smartvpn: 'YES'
  }
]

module.exports = {hosts}