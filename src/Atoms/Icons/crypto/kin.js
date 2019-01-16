// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoKin = props => <svg viewBox="0 0 32 32" {...props}><g fill="none" fillRule="evenodd"><circle cx={16} cy={16} fill="#005fff" r={16} /><path d="M13.701 18.007V13.19h1.125c.243 0 .44.194.44.433v.416c0 .452.392.84.849.84.457 0 .804-.388.804-.84v-.4c0-.248.203-.45.455-.45h1.253v1.218c0 .248-.204.45-.455.45h-.425a.824.824 0 0 0-.828.817c0 .451.424.817.881.817h.375c.25 0 .452.2.452.446v1.07h1.009c.35 0 .633.278.633.62v.367c0 .342-.284.62-.633.62h-.376a.626.626 0 0 1-.633-.62v-.826H17.37c-.25 0-.451-.2-.451-.446v-.412a.85.85 0 0 0-.842-.834c-.457 0-.812.4-.812.875v.374c0 .245-.2.443-.448.443h-1.116v.826c0 .342-.283.62-.633.62h-.375a.626.626 0 0 1-.633-.62v-.367c0-.342.283-.62.633-.62zm5.935-4.978h-1.01v-.986c0-.342.284-.62.634-.62h.376c.35 0 .633.278.633.62v.367c0 .342-.284.62-.633.62zm-5.935 0h-1.008a.626.626 0 0 1-.633-.619v-.367c0-.342.283-.62.633-.62h.375c.35 0 .633.278.633.62zm2.275-1.445a.626.626 0 0 1-.633-.62v-.367c0-.342.284-.619.633-.619h.376c.35 0 .633.277.633.62v.367a.626.626 0 0 1-.633.619zm0 9.796a.626.626 0 0 1-.633-.62v-.367c0-.342.284-.62.633-.62h.376c.35 0 .633.278.633.62v.368a.626.626 0 0 1-.633.619zm4.926-4.979a.626.626 0 0 1-.633-.619v-.367c0-.342.283-.62.633-.62h.375c.35 0 .633.278.633.62v.367c0 .342-.283.62-.633.62zm-10.015 0a.626.626 0 0 1-.633-.619v-.367c0-.342.283-.62.633-.62h.375c.35 0 .634.278.634.62v.367c0 .342-.284.62-.634.62zm7.766 5.021a.58.58 0 0 1 .75.305.557.557 0 0 1-.31.734.58.58 0 0 1-.75-.304.558.558 0 0 1 .31-.735zM13.4 8.897a.58.58 0 0 1 .75.304.558.558 0 0 1-.31.734.58.58 0 0 1-.751-.304.558.558 0 0 1 .31-.734zm8.554 4.428a.558.558 0 0 1 .311-.735.58.58 0 0 1 .75.304.558.558 0 0 1-.31.735.58.58 0 0 1-.75-.304zM9.312 18.463a.558.558 0 0 1 .311-.734.579.579 0 0 1 .751.304.558.558 0 0 1-.31.734.58.58 0 0 1-.752-.304zm0-5.569a.58.58 0 0 1 .751-.304.558.558 0 0 1 .311.735.58.58 0 0 1-.75.304.558.558 0 0 1-.312-.735zm9.177-2.959a.558.558 0 0 1-.31-.734.58.58 0 0 1 .75-.304.558.558 0 0 1 .31.734.58.58 0 0 1-.75.304zm3.465 8.098a.579.579 0 0 1 .75-.304.558.558 0 0 1 .312.734.58.58 0 0 1-.75.304.558.558 0 0 1-.312-.734zm-8.883 4.588a.557.557 0 0 1-.31-.734.58.58 0 0 1 .75-.304.558.558 0 0 1 .31.734.58.58 0 0 1-.75.304zm8.443-1.63a.334.334 0 0 1 .464 0c.129.126.129.33 0 .455s-.335.125-.464 0a.316.316 0 0 1 0-.454zM10.35 9.912c.128-.125.336-.125.464 0s.128.33 0 .455a.334.334 0 0 1-.464 0 .316.316 0 0 1 0-.454zm11.164.455a.316.316 0 0 1 0-.454c.129-.126.336-.126.464 0s.129.328 0 .454a.334.334 0 0 1-.464 0zM10.35 21.446a.316.316 0 0 1 0-.454.334.334 0 0 1 .464 0c.128.125.128.329 0 .454s-.336.125-.464 0zm13.53-5.847c0-.178.148-.322.329-.322.181 0 .328.144.328.322a.325.325 0 0 1-.328.32.325.325 0 0 1-.328-.32zm-15.925 0c0-.178.147-.322.329-.322.18 0 .328.144.328.322a.325.325 0 0 1-.328.32.325.325 0 0 1-.329-.32zm8.21-7.387a.325.325 0 0 1-.33-.321c0-.178.148-.322.33-.322.18 0 .328.144.328.322a.325.325 0 0 1-.329.32zm0 15.576a.325.325 0 0 1-.33-.32c0-.178.148-.322.33-.322.18 0 .328.144.328.321a.325.325 0 0 1-.329.321zm10.178-8.19c0-.177.148-.32.329-.32.18 0 .328.143.328.32a.325.325 0 0 1-.328.322.325.325 0 0 1-.329-.321zm-21.097-.16c.136 0 .247.108.247.24s-.11.242-.247.242c-.136 0-.246-.108-.246-.241s.11-.241.246-.241zM15.672 5.321c0-.177.147-.321.328-.321s.328.144.328.321c0 .177-.147.321-.328.321s-.328-.144-.328-.32zm9.725 14.105a.497.497 0 0 1 .645-.257.48.48 0 0 1 .263.632.494.494 0 0 1-.646.256.479.479 0 0 1-.262-.631zm-5.33 5.19a.322.322 0 0 1 .177.176.313.313 0 0 1-.001.245.331.331 0 0 1-.606-.004.313.313 0 0 1 0-.245.323.323 0 0 1 .18-.173.337.337 0 0 1 .25.002zM6.442 11.289c.08.034.143.096.176.175a.313.313 0 0 1-.001.246.331.331 0 0 1-.606-.004.313.313 0 0 1 .001-.246.322.322 0 0 1 .179-.172.336.336 0 0 1 .251.001zm-.916 8.25a.414.414 0 0 1 .538-.214.398.398 0 0 1 .218.526.414.414 0 0 1-.538.213.398.398 0 0 1-.218-.526zM19.863 6.252a.398.398 0 0 1-.219-.526.414.414 0 0 1 .538-.214.398.398 0 0 1 .218.526.414.414 0 0 1-.537.214zm6.141 4.867a.251.251 0 0 1 .189.001.24.24 0 0 1-.003.445.249.249 0 0 1-.321-.132.234.234 0 0 1 .001-.185.242.242 0 0 1 .134-.129zM11.587 5.95a.247.247 0 0 1 .322-.128.239.239 0 0 1-.003.445.25.25 0 0 1-.188-.001.24.24 0 0 1-.131-.316zm.063 18.962c.032 0 .064.007.095.02a.239.239 0 0 1 .131.315.248.248 0 0 1-.322.128.24.24 0 0 1-.132-.315.247.247 0 0 1 .228-.148zm11.642-1.7a.334.334 0 0 1-.465 0 .316.316 0 0 1 0-.454.33.33 0 0 1 .233-.094.33.33 0 0 1 .232.094.316.316 0 0 1 0 .455zM7.935 8.033a.501.501 0 0 1 .697 0 .475.475 0 0 1 0 .681.497.497 0 0 1-.697 0 .475.475 0 0 1 0-.681zm15.525.09a.248.248 0 0 1 .348 0 .238.238 0 0 1 0 .34.25.25 0 0 1-.348 0 .236.236 0 0 1 0-.34zM8.027 22.735a.248.248 0 0 1 .348 0 .237.237 0 0 1 0 .34.25.25 0 0 1-.348 0 .237.237 0 0 1 0-.34zM16.082 27a.406.406 0 0 1-.41-.401c0-.222.183-.402.41-.402.227 0 .41.18.41.402a.406.406 0 0 1-.41.401z" fill="#fff" /></g></svg>;

export const CryptoKin = withStyle(SvgCryptoKin, "CryptoKin", true);