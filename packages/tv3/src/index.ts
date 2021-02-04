import tv3Compiler from '@tv3/compiler';
function tv3() {
    console.log('tv3 ing');
    tv3Compiler({context: process.cwd()});
}

export default tv3;