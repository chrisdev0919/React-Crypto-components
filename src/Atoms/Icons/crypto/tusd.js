// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoTusd = props => <svg viewBox="0 0 32 32" {...props}><g fill="none"><circle cx={16} cy={16} r={16} fill="#2B2E7F" /><g fill="#FFF"><path d="M17.057 19.028v-5.86h.77c2.545 0 3.172-2.373 3.172-2.373h-6.683c-3.172 0-3.71 2.374-3.71 2.374h3.943v8.817s2.508-.753 2.508-2.958z" /><path d="M24.395 23.594c2.248-2.336 3.11-5.58 2.301-8.683a9.339 9.339 0 0 0-2.48-4.28c-.108-.106-.216-.214-.342-.32l-.108-.107a2.185 2.185 0 0 0-.234-.196l-.144-.107-.215-.16-.127-.09a4.15 4.15 0 0 1-.251-.178l-.163-.106a1.22 1.22 0 0 0-.215-.125l-.162-.107c-.072-.036-.144-.09-.216-.125l-.162-.09c-.072-.035-.144-.071-.234-.106l-.055-.018c.198.16.395.339.575.517a8.75 8.75 0 0 1 0 12.427c-4.386 4.35-11.505 4.35-15.893 0-.162-.16-.306-.32-.467-.48l-.126-.143a5.762 5.762 0 0 1-.27-.339 11.856 11.856 0 0 0 2.176 2.995c4.584 4.546 12.026 4.546 16.61 0a.614.614 0 0 0 .202-.18z" /><path d="M10.4 22.386a8.168 8.168 0 0 1-.576-.517 8.758 8.758 0 0 1 0-12.439c4.391-4.354 11.516-4.354 15.907 0 .306.304.593.625.863.964a11.784 11.784 0 0 0-2.177-2.98c-4.588-4.551-12.038-4.551-16.626 0-.054.053-.108.125-.18.178-3.041 3.177-3.455 7.924-1.025 11.529.954 1.39 2.284 2.55 3.814 3.265z" /></g></g></svg>;

export const CryptoTusd = withStyle(SvgCryptoTusd, "CryptoTusd", true);