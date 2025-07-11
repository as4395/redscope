#!/usr/bin/env node

const { notarize } = require('electron-notarize');
const path = require('path');

async function main() {
  await notarize({
    appBundleId: 'com.redscope.app',
    appPath: path.resolve(__dirname, '../dist/mac/RedScope.app'),
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_ID_PASSWORD
  });
  console.log('✅ Notarization complete');
}

main().catch((err) => {
  console.error('❌ Notarization failed:', err);
  process.exit(1);
});
