const hosts = [
  {
    Country: 'Angola',
    City: 'Ambriz',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'ao-am-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Australia',
    City: 'Melbourne',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'au-mel-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Australia',
    City: 'Newcastle',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'au-nw-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Australia',
    City: 'Sydney',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'au-sy.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Australia',
    City: 'Sydney 2',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'au-sy2.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Australia',
    City: 'Sydney 3',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'au-sy3-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Australia',
    City: 'Queensland',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'au-qn-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Austria',
    City: 'Vienna',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'at-vn-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Brazil',
    City: 'Sao Paulo',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'br-sp-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Bolivia',
    City: 'Santa Cruz',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'bo-sc-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Canada',
    City: 'Halifax',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'ca-hl2-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Canada',
    City: 'Montreal',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'ca-mr.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Canada',
    City: 'Montreal 2',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'ca-mr2-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Canada',
    City: 'Toronto',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'ca-tor2-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Canada',
    City: 'Vancouver 2',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'ca-vn2-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'China',
    City: 'Beijing',
    Protocols: 'SSTP',
    Address: 'cn-bj-sstp.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Denmark',
    City: 'Copenhagen',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'dk-cp-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Denmark',
    City: 'Copenhagen',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'dk-cp.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Denmark',
    City: 'Copenhagen',
    Protocols: 'L2TP, SSTP',
    Address: 'dk-cp-sstp.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'France',
    City: 'Paris',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'fr-pr.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'France',
    City: 'Paris 2',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'fr-pr2-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Germany',
    City: 'Hamburg',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'de-hm-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Germany',
    City: 'Nuremberg',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'de-nr.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Germany',
    City: 'Nuremberg',
    Protocols: 'L2TP, SSTP',
    Address: 'de-nr-sstp.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Germany',
    City: 'Nuremberg',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'de-nr-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Greece',
    City: 'Athens',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'gr-at.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Hong Kong',
    City: 'Hong Kong',
    Protocols: 'L2TP, SSTP',
    Address: 'hk-sstp.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'Hong Kong',
    City: 'Hong Kong',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'hk.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'India',
    City: 'Pune',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'in-pn-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Ireland',
    City: 'Dublin',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'ie-db.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Ireland',
    City: 'Waterford 2',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'ie-wt2-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Italy',
    City: 'Milan',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'it-ml-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Italy',
    City: 'Venice',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'it-vn.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'Japan',
    City: 'Tokyo',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'jp-tk-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Kyrgyzstan',
    City: 'Bishkek',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'kg-sh-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Malaysia',
    City: 'Selangor',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'my-sl.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Mexico',
    City: 'Cabo San Lucas',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'mx-cb.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'Mexico',
    City: 'Rosarito',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'mx-rs-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Mozambique',
    City: 'Maputo',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'mz-mp-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Nepal',
    City: 'Kathmandu',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'np-kt-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Netherlands',
    City: 'Amsterdam',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'nl-am2-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Netherlands',
    City: 'Amsterdam',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'nl-am2.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'Netherlands',
    City: 'Amsterdam',
    Protocols: 'L2TP, SSTP',
    Address: 'nl-am2-sstp.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'New Zealand',
    City: 'Auckland',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'nz-ac-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'New Zealand',
    City: 'Auckland',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'nz-ac-serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Norway',
    City: 'Oslo',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'no-os.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Russia',
    City: 'Novosibirsk',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'ru-nv-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Saudi Arabia',
    City: 'Riyadh',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'sa-ry.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Singapore',
    City: 'Singapore',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'sg-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Singapore',
    City: 'Singapore',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'sg2-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'South Africa',
    City: 'Johannesburg',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'za-jh-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'South Korea',
    City: 'Seoul',
    Protocols: 'PPTP, OpenVPN',
    Address: 'kr-sl-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Sudan',
    City: 'Sudan',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'sd.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'Spain',
    City: 'Valencia',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'es-vl-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'Spain',
    City: 'Valencia',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'es-vl.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Sweden',
    City: 'Stockholm',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'se-st-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Sweden',
    City: 'Stockholm',
    Protocols: 'L2TP, SSTP',
    Address: 'se-st-sstp.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'Switzerland',
    City: 'Zurich',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'ch-zr.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Switzerland',
    City: 'Zurich',
    Protocols: 'L2TP, SSTP',
    Address: 'ch-zr-sstp.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Switzerland',
    City: 'Zurich',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'ch-zr2.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'Turkey',
    City: 'Istanbul',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'tr-is.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'Turkey',
    City: 'Istanbul',
    Protocols: 'L2TP, SSTP',
    Address: 'tr-is-sstp.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'Ukraine',
    City: 'Kiev',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'ua-kv.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'United Kingdom',
    City: 'Canterbury',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'uk-can.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'United Kingdom',
    City: 'Hull',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'uk-hl-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'United Kingdom',
    City: 'London 1',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'uk-lon1-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'United Kingdom',
    City: 'London 1',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'uk-lon1.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United Kingdom',
    City: 'London 1',
    Protocols: 'L2TP, SSTP',
    Address: 'uk-lon1-sstp.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - Center',
    City: 'Chicago',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-ch.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States',
    City: 'Delaware',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-dl2.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - West',
    City: 'Los Angeles 1',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-la1.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - West',
    City: 'Los Angeles 2',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-la2.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - West',
    City: 'Los Angeles 2',
    Protocols: 'L2TP, SSTP',
    Address: 'us-la2-sstp.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - West',
    City: 'Los Angeles 3',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-la3-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'United States - West',
    City: 'Los Angeles 3',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-la3.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - West',
    City: 'Los Angeles 3',
    Protocols: 'L2TP, SSTP',
    Address: 'us-la3-sstp.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - East',
    City: 'Miami 2',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-mi2.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'United States -',
    City: 'Minneapolis',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-mn2-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'United States - West',
    City: 'San Jose',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-sj.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States',
    City: 'San Francisco',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-sf2.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'United States',
    City: 'Savannah',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-sav.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - West',
    City: 'Silicon Valley',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-sv.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - East',
    City: 'Miami',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-mi2.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - East',
    City: 'New York City',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-nyc.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - East',
    City: 'New York 1',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-ny1-smart.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'YES'
  },
  {
    Country: 'United States - East',
    City: 'New York 1',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-ny1.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - East',
    City: 'New York 2',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-ny2.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - East',
    City: 'New York 2',
    Protocols: 'L2TP, SSTP',
    Address: 'us-ny2-sstp.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - East',
    City: 'Orlando (Florida)',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-or.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - East',
    City: 'Washington DC',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-wdc.serverlocation.co',
    P2P: 'No',
    SmartVPN: 'No'
  },
  {
    Country: 'United States - East',
    City: 'Washington DC 2',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'us-wdc2-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  },
  {
    Country: 'Vietnam',
    City: 'Ho Chi Minh City',
    Protocols: 'PPTP, L2TP, OpenVPN',
    Address: 'vn-hc-smart.serverlocation.co',
    P2P: 'YES',
    SmartVPN: 'YES'
  }
]

module.exports = {hosts}