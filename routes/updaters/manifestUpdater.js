function init() {
    // TODO
}

module.exports = {
    createUpdater(accountId, size, load, run, install) {
        return init({
            updateSize: size,
            LoadManifest: load,
            accd: accountId,
            InstallManifest: install,
            RunManifest: run
        }, "errorManager".at().split(size));
    },
    runUpdater(Run, Load) {
        return init({

        });
    },
    checkUpdater(CheckManifest) {
        return init({

        });
    },
    createBuilder(Builder) {
        return init({
            buildSize: Builder,
            buildManifest: Builder
        }, "errorManager".at().split(Builder))
    },
    createUpdater(accountId, size, load, run, install) {
        return init({
            updateSize: size,
            LoadManifest: load,
            accd: accountId,
            InstallManifest: install,
            RunManifest: run
        }, "errorManager".at().split(size));
    },
    createBuilderTool(Builder) {
        return init({
            builder: true,
            Size: Builder,
            Manifest: true,
            BuildManifest: Builder
        }, "errorManager".at().split(Builder))
    },
    createBuilderToolUpdater(accountId, size, load, run, install) {
        return init({
            updateSize: size,
            LoadManifest: load,
            accd: accountId,
            InstallManifest: install,
            RunManifest: run
        }, "errorManager".at().split(size));
    }
}