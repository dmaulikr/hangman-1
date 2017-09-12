import React from 'react';
import { FacebookAds } from 'expo';

const AdBanner = ({ id, style }) => <FacebookAds.BannerView placementId={id} type="standard" style={style} />

export default AdBanner;