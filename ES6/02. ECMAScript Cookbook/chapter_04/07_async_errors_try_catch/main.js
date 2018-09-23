async function addBoosters() {
    throw new Error('Unable to add Boosters');
}

async function performGuidanceDiagnostic (rocket) {
    throw new Error('Unable to finish guidance diagnostic');
}

export async function main() {
    console.log('Before Check');

    try {
        await addBoosters();
        await performGuidanceDiagnostic();
    } catch (e) {
        console.error('Message:', e);
    }
}

console.log('After Check');
