import { Mesh, MeshBasicMaterial, Object3D, PlaneGeometry, Camera } from 'three';
export interface TransformControlsPointerObject {
    x: number;
    y: number;
    button: number;
}
declare class TransformControls<TCamera extends Camera = Camera> extends Object3D {
    readonly isTransformControls = true;
    visible: boolean;
    private domElement;
    private raycaster;
    private gizmo;
    private plane;
    private tempVector;
    private tempVector2;
    private tempQuaternion;
    private unit;
    private pointStart;
    private pointEnd;
    private offset;
    private rotationAxis;
    private startNorm;
    private endNorm;
    private rotationAngle;
    private cameraPosition;
    private cameraQuaternion;
    private cameraScale;
    private parentPosition;
    private parentQuaternion;
    private parentQuaternionInv;
    private parentScale;
    private worldPositionStart;
    private worldQuaternionStart;
    private worldScaleStart;
    private worldPosition;
    private worldQuaternion;
    private worldQuaternionInv;
    private worldScale;
    private eye;
    private positionStart;
    private quaternionStart;
    private scaleStart;
    private camera;
    private object;
    private enabled;
    private axis;
    private mode;
    private translationSnap;
    private rotationSnap;
    private scaleSnap;
    private space;
    private size;
    private dragging;
    private showX;
    private showY;
    private showZ;
    private changeEvent;
    private mouseDownEvent;
    private mouseUpEvent;
    private objectChangeEvent;
    constructor(camera: TCamera, domElement: HTMLElement | undefined);
    private intersectObjectWithRay;
    attach: (object: Object3D) => this;
    detach: () => this;
    reset: () => this;
    updateMatrixWorld: () => void;
    private pointerHover;
    private pointerDown;
    private pointerMove;
    private pointerUp;
    private getPointer;
    private onPointerHover;
    private onPointerDown;
    private onPointerMove;
    private onPointerUp;
    getMode: () => TransformControls['mode'];
    setMode: (mode: TransformControls['mode']) => void;
    setTranslationSnap: (translationSnap: number) => void;
    setRotationSnap: (rotationSnap: number) => void;
    setScaleSnap: (scaleSnap: number) => void;
    setSize: (size: number) => void;
    setSpace: (space: string) => void;
    update: () => void;
    connect: (domElement: HTMLElement) => void;
    dispose: () => void;
}
declare type TransformControlsGizmoPrivateGizmos = {
    ['translate']: Object3D;
    ['scale']: Object3D;
    ['rotate']: Object3D;
    ['visible']: boolean;
};
declare class TransformControlsGizmo extends Object3D {
    private isTransformControlsGizmo;
    type: string;
    private tempVector;
    private tempEuler;
    private alignVector;
    private zeroVector;
    private lookAtMatrix;
    private tempQuaternion;
    private tempQuaternion2;
    private identityQuaternion;
    private unitX;
    private unitY;
    private unitZ;
    private gizmo;
    picker: TransformControlsGizmoPrivateGizmos;
    private helper;
    private rotationAxis;
    private cameraPosition;
    private worldPositionStart;
    private worldQuaternionStart;
    private worldPosition;
    private worldQuaternion;
    private eye;
    private camera;
    private enabled;
    private axis;
    private mode;
    private space;
    private size;
    private dragging;
    private showX;
    private showY;
    private showZ;
    constructor();
    updateMatrixWorld: () => void;
}
declare class TransformControlsPlane extends Mesh<PlaneGeometry, MeshBasicMaterial> {
    private isTransformControlsPlane;
    type: string;
    constructor();
    private unitX;
    private unitY;
    private unitZ;
    private tempVector;
    private dirVector;
    private alignVector;
    private tempMatrix;
    private identityQuaternion;
    private cameraQuaternion;
    private worldPosition;
    private worldQuaternion;
    private eye;
    private axis;
    private mode;
    private space;
    updateMatrixWorld: () => void;
}
export { TransformControls, TransformControlsGizmo, TransformControlsPlane };
